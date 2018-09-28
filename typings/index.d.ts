import * as Draft from "draft-js";
import * as React from "react";

declare module "react-draft-wysiwyg" {
    export type EditorProps = Partial<{
        ariaActiveDescendantID: string;
        ariaAutoComplete: string;
        ariaDescribedBy: string;
        ariaHasPopup: string;
        ariaLabel: string;
        ariaOwneeID: string;
        contentState: Draft.RawDraftContentState;
        customBlockRenderFunc: Function;
        customDecorators: Decorator[];
        customStyleFn?: (style: Draft.DraftInlineStyle) => any;
        defaultContentState: Draft.RawDraftContentState;
        defaultEditorState: Draft.EditorState;
        editorClassName: string;
        editorRef: any;
        editorState: Draft.EditorState;
        editorStyle: React.CSSProperties;
        hashtag: HashtagConfig;

        /**
         * @deprecated Use defaultContentState instead.
         */
        initialContentState: Draft.RawDraftContentState;

        locale: string;
        localization: Localization;
        mention: MentionConfig;
        placeholder: string;
        readOnly: boolean;
        spellCheck: boolean;
        stripPastedStyles: boolean;
        tabIndex: number;
        toolbar: any;
        toolbarClassName: string;
        toolbarCustomButtons: React.ReactHTMLElement<HTMLElement>[];
        toolbarHidden: boolean;
        toolbarOnFocus: boolean;
        toolbarStyle: React.CSSProperties;
        uploadCallback: Function;
        wrapperClassName: string;
        wrapperId: number;
        wrapperStyle: React.CSSProperties;

        handleKeyCommand(command: string, editorState: Draft.EditorState): Draft.DraftHandleValue;
        handlePastedText(text: string, html: string|undefined, editorState: Draft.EditorState): Draft.DraftHandleValue;
        handleReturn(e: React.KeyboardEvent<{}>, editorState: Draft.EditorState): Draft.DraftHandleValue;
        onBlur(event: React.FocusEvent<HTMLElement>): void;
        onChange(editorState: Draft.EditorState): void;
        onContentStateChange(contentState: Draft.ContentState): void;
        onEditorStateChange(editorState: Draft.EditorState, wrapperId: string): void;
        onFocus(event: React.FocusEvent<HTMLElement>): void;
        onTab(event: React.KeyboardEvent<HTMLElement>): void;
    }>;

    export class Editor extends React.Component<EditorProps> {
        focusEditor(): void;
    }

    export type Decorator = {
        strategy: (block: Draft.ContentBlock, callback: (start: number, end: number) => void, contentState: Draft.ContentState) => void;
        component: React.ComponentClass;
        props?: any;
    }

    export type HashtagConfig = Partial<{
        className: string;
        hashCharacter: string;
        separator: string;
    }>;

    export type Localization = {
        locale: string;
        translations: Record<string, string>;
    };

    export type MentionConfig = Partial<{
        caseSensitive: boolean;
        dropdownClassName: string;
        mentionClassName: string;
        optionClassName: string;
        separator: string;
        trigger: string;
    }>;
}
