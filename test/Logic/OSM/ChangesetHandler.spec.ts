import {describe} from 'mocha'
import {expect} from 'chai'
import {Utils} from "../../../Utils";
import {ChangesetHandler, ChangesetTag} from "../../../Logic/Osm/ChangesetHandler";
import {UIEventSource} from "../../../Logic/UIEventSource";
import {OsmConnection} from "../../../Logic/Osm/OsmConnection";
import {ElementStorage} from "../../../Logic/ElementStorage";
import {Changes} from "../../../Logic/Osm/Changes";

describe("ChangesetHanlder", () => {

    describe("RewriteTagsOf", () => {
        it("should insert new tags", () => {

            const changesetHandler = new ChangesetHandler(new UIEventSource<boolean>(true),
                new OsmConnection({}),
                new ElementStorage(),
                new Changes(),
                new UIEventSource(undefined)
            );

            const oldChangesetMeta = {
                "type": "changeset",
                "id": 118443748,
                "created_at": "2022-03-13T19:52:10Z",
                "closed_at": "2022-03-13T20:54:35Z",
                "open": false,
                "user": "Pieter Vander Vennet",
                "uid": 3818858,
                "minlat": 51.0361902,
                "minlon": 3.7092939,
                "maxlat": 51.0364194,
                "maxlon": 3.7099520,
                "comments_count": 0,
                "changes_count": 3,
                "tags": {
                    "answer": "5",
                    "comment": "Adding data with #MapComplete for theme #toerisme_vlaanderen",
                    "created_by": "MapComplete 0.16.6",
                    "host": "https://mapcomplete.osm.be/toerisme_vlaanderen.html",
                    "imagery": "osm",
                    "locale": "nl",
                    "source": "survey",
                    "source:node/-1": "note/1234",
                    "theme": "toerisme_vlaanderen",
                }
            }
            const rewritten = changesetHandler.RewriteTagsOf(
                [{
                    key: "newTag",
                    value: "newValue",
                    aggregate: false
                }],
                new Map<string, string>(),
                oldChangesetMeta)
            const d = Utils.asDict(rewritten)
            expect(d.size).deep.equal(10)
            expect(d.get("answer")).deep.equal("5")
            expect(d.get("comment")).deep.equal("Adding data with #MapComplete for theme #toerisme_vlaanderen")
            expect(d.get("created_by")).deep.equal("MapComplete 0.16.6")
            expect(d.get("host")).deep.equal("https://mapcomplete.osm.be/toerisme_vlaanderen.html")
            expect(d.get("imagery")).deep.equal("osm")
            expect(d.get("source")).deep.equal("survey")
            expect(d.get("source:node/-1")).deep.equal("note/1234")
            expect(d.get("theme")).deep.equal("toerisme_vlaanderen")
            expect(d.get("newTag")).deep.equal("newValue")

        })
        it("should aggregate numeric tags", () => {
            const changesetHandler = new ChangesetHandler(new UIEventSource<boolean>(true),
                new OsmConnection({}),
                new ElementStorage(),
                new Changes(),
                new UIEventSource(undefined)
            );
            const oldChangesetMeta = {
                "type": "changeset",
                "id": 118443748,
                "created_at": "2022-03-13T19:52:10Z",
                "closed_at": "2022-03-13T20:54:35Z",
                "open": false,
                "user": "Pieter Vander Vennet",
                "uid": 3818858,
                "minlat": 51.0361902,
                "minlon": 3.7092939,
                "maxlat": 51.0364194,
                "maxlon": 3.7099520,
                "comments_count": 0,
                "changes_count": 3,
                "tags": {
                    "answer": "5",
                    "comment": "Adding data with #MapComplete for theme #toerisme_vlaanderen",
                    "created_by": "MapComplete 0.16.6",
                    "host": "https://mapcomplete.osm.be/toerisme_vlaanderen.html",
                    "imagery": "osm",
                    "locale": "nl",
                    "source": "survey",
                    "source:node/-1": "note/1234",
                    "theme": "toerisme_vlaanderen",
                }
            }
            const rewritten = changesetHandler.RewriteTagsOf(
                [{
                    key: "answer",
                    value: "37",
                    aggregate: true
                }],
                new Map<string, string>(),
                oldChangesetMeta)
            const d = Utils.asDict(rewritten)

            expect(d.size).deep.equal(9)
            expect(d.get("answer")).deep.equal("42")
            expect(d.get("comment")).deep.equal("Adding data with #MapComplete for theme #toerisme_vlaanderen")
            expect(d.get("created_by")).deep.equal("MapComplete 0.16.6")
            expect(d.get("host")).deep.equal("https://mapcomplete.osm.be/toerisme_vlaanderen.html")
            expect(d.get("imagery")).deep.equal("osm")
            expect(d.get("source")).deep.equal("survey")
            expect(d.get("source:node/-1")).deep.equal("note/1234")
            expect(d.get("theme")).deep.equal("toerisme_vlaanderen")
        })
        it("should rewrite special reasons with the correct ID", () => {
            const changesetHandler = new ChangesetHandler(new UIEventSource<boolean>(true),
                new OsmConnection({}),
                new ElementStorage(),
                new Changes(),
                new UIEventSource(undefined)
            );
            const oldChangesetMeta = {
                "type": "changeset",
                "id": 118443748,
                "created_at": "2022-03-13T19:52:10Z",
                "closed_at": "2022-03-13T20:54:35Z",
                "open": false,
                "user": "Pieter Vander Vennet",
                "uid": 3818858,
                "minlat": 51.0361902,
                "minlon": 3.7092939,
                "maxlat": 51.0364194,
                "maxlon": 3.7099520,
                "comments_count": 0,
                "changes_count": 3,
                "tags": {
                    "answer": "5",
                    "comment": "Adding data with #MapComplete for theme #toerisme_vlaanderen",
                    "created_by": "MapComplete 0.16.6",
                    "host": "https://mapcomplete.osm.be/toerisme_vlaanderen.html",
                    "imagery": "osm",
                    "locale": "nl",
                    "source": "survey",
                    "source:node/-1": "note/1234",
                    "theme": "toerisme_vlaanderen",
                }
            }
            const rewritten = changesetHandler.RewriteTagsOf(
                [],
                new Map<string, string>([["node/-1", "node/42"]]),
                oldChangesetMeta)
            const d = Utils.asDict(rewritten)

            expect(d.size).deep.equal(9)
            expect(d.get("answer")).deep.equal("5")
            expect(d.get("comment")).deep.equal("Adding data with #MapComplete for theme #toerisme_vlaanderen")
            expect(d.get("created_by")).deep.equal("MapComplete 0.16.6")
            expect(d.get("host")).deep.equal("https://mapcomplete.osm.be/toerisme_vlaanderen.html")
            expect(d.get("imagery")).deep.equal("osm")
            expect(d.get("source")).deep.equal("survey")
            expect(d.get("source:node/42")).deep.equal("note/1234")
            expect(d.get("theme")).deep.equal("toerisme_vlaanderen")
        })
    })
    
    describe("rewriteMetaTags" , () => {
        it("should rewrite special reasons with the correct ID", () => {
            const extraMetaTags : ChangesetTag[] = [
                {
                    key: "created_by",
                    value:"mapcomplete"
                },
                {
                    key: "source:node/-1",
                    value:"note/1234"
                }
            ]
            const changes = new Map<string, string>([["node/-1","node/42"]])
            const hasSpecialMotivationChanges = ChangesetHandler.rewriteMetaTags(extraMetaTags, changes)
            expect(hasSpecialMotivationChanges, "Special rewrite did not trigger").true
            // Rewritten inline by rewriteMetaTags
            expect(extraMetaTags[1].key).deep.equal("source:node/42")
            expect(extraMetaTags[1].value).deep.equal("note/1234")
            expect(extraMetaTags[0].key).deep.equal("created_by")
            expect(extraMetaTags[0].value).deep.equal("mapcomplete")
        })
})
})
