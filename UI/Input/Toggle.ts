import {UIEventSource} from "../../Logic/UIEventSource";
import BaseUIElement from "../BaseUIElement";
import {VariableUiElement} from "../Base/VariableUIElement";
import Lazy from "../Base/Lazy";

/**
 * The 'Toggle' is a UIElement showing either one of two elements, depending on the state.
 * It can be used to implement e.g. checkboxes or collapsible elements
 */
export default class Toggle extends VariableUiElement {

    public readonly isEnabled: UIEventSource<boolean>;

    constructor(showEnabled: string | BaseUIElement, showDisabled: string | BaseUIElement, isEnabled: UIEventSource<boolean> = new UIEventSource<boolean>(false)) {
        super(
            isEnabled?.map(isEnabled => isEnabled ? showEnabled : showDisabled)
        );
        this.isEnabled = isEnabled
    }

    public static If(condition: UIEventSource<boolean>, constructor: () => BaseUIElement): BaseUIElement {
        if (constructor === undefined) {
            return undefined
        }
        return new Toggle(
            new Lazy(constructor),
            undefined,
            condition
        )

    }

    public ToggleOnClick(): Toggle {
        const self = this;
        this.onClick(() => {
            self.isEnabled.setData(!self.isEnabled.data);
        })
        return this;
    }
}