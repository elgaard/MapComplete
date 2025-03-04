import {Translation, TypedTranslation} from "../../UI/i18n/Translation";
import {TagsFilter} from "../../Logic/Tags/TagsFilter";
import {DeleteConfigJson} from "./Json/DeleteConfigJson";
import Translations from "../../UI/i18n/Translations";
import {TagUtils} from "../../Logic/Tags/TagUtils";

export default class DeleteConfig {
    public static readonly defaultDeleteReasons : {changesetMessage: string, explanation: Translation} [] = [
        {
            changesetMessage: "testing point",
            explanation: Translations.t.delete.reasons.test
        },
        {
            changesetMessage:"disused",
            explanation: Translations.t.delete.reasons.disused
        },
        {
            changesetMessage: "not found",
            explanation: Translations.t.delete.reasons.notFound
        },
        {
            changesetMessage: "duplicate",
            explanation:Translations.t.delete.reasons.duplicate
        }
    ]


    public readonly extraDeleteReasons?: {
        explanation: TypedTranslation<object>,
        changesetMessage: string
    }[]

    public readonly nonDeleteMappings?: { if: TagsFilter, then: TypedTranslation<object> }[]

    public readonly softDeletionTags?: TagsFilter
    public readonly neededChangesets?: number

    constructor(json: DeleteConfigJson, context: string) {

        this.extraDeleteReasons = (json.extraDeleteReasons ?? []).map((reason, i) => {
            const ctx = `${context}.extraDeleteReasons[${i}]`
            if ((reason.changesetMessage ?? "").length <= 5) {
                throw `${ctx}.explanation is too short, needs at least 4 characters`
            }
            return {
                explanation: Translations.T(reason.explanation, ctx + ".explanation"),
                changesetMessage: reason.changesetMessage
            }
        })
        this.nonDeleteMappings = (json.nonDeleteMappings??[]).map((nonDelete, i) => {
            const ctx = `${context}.extraDeleteReasons[${i}]`
            return {
                if: TagUtils.Tag(nonDelete.if, ctx + ".if"),
                then: Translations.T(nonDelete.then, ctx + ".then")
            }
        })

        this.softDeletionTags = undefined;
        if (json.softDeletionTags !== undefined) {
            this.softDeletionTags = TagUtils.Tag(json.softDeletionTags, `${context}.softDeletionTags`)

        }

        if (json["hardDeletionTags"] !== undefined) {
            throw `You probably meant 'softDeletionTags' instead of 'hardDeletionTags' (at ${context})`
        }
        this.neededChangesets = json.neededChangesets
    }


}