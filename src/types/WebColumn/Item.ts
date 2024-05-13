import { ReactNode } from 'react';

export enum ItemType {
    Image = 'IMG',
    Logo = 'LOGO',
    Paragraph = 'PARA',
    ContentTitle = 'CONTENT_TITLE',
    MainTitle = 'MAIN_TITLE',
    MainSubtitle = 'MAIN_SUBTITLE',
    Quote = 'QUOTE',
    ThreeImageInRow = 'THREE_IMAGE_IN_ROW',
    TwoColumn = 'TWO_COLUMN',
    Empty = 'EMPTY',
    General = 'GENERAL',
}

interface ItemAdust {
    width: '1/3' | '2/3';
    hide: boolean;
}

// interface Item {
//     type: ItemType;
//     adjust?: ItemAdust;
//     src?: string;
//     alt?: string;
//     title?: string | (() => string);
//     text?: string | (() => string);
//     render?: () => ReactNode;
//     left?: Item[];
//     right?: Item[];
// }
interface ItemTypeLogo {
    type: ItemType.Logo;
    adjust?: {
        width?: string;
        hide?: boolean
    }
    src?: string;
    alt?: string;
}
interface ItemTypeMainSubTitle {
    type: ItemType.MainSubtitle;
    title?: string | (() => string) | (() => ReactNode);
}
interface ItemTypeMainTitle {
    type: ItemType.MainTitle;
    title?: string | (() => string) | (() => ReactNode);

}
interface ItemTypeContentTitle {
    type: ItemType.ContentTitle;
    title?: string | (() => string) | (() => ReactNode);
}
interface ItemTypeQuote {
    type: ItemType.Quote;
    text?: string | (() => string) | (() => ReactNode);
}
interface ItemTypeParagraph {
    type: ItemType.Paragraph;
    text?: string | (() => string) | (() => ReactNode);
}
interface ItemTypeImage {
    type: ItemType.Image;
    adjust?: {
        width?: string;
        hide?: boolean
    }
    src?: string;
    alt?: string;
}
interface ItemTypeLogo {
    type: ItemType.Logo;
    adjust?: {
        width?: string;
        hide?: boolean
    }
    src?: string;
    alt?: string;
}

interface ItemTypeThreeImageInRow {
    type: ItemType.ThreeImageInRow;
    images: [string, string, string]
    alt?: string;
}

interface ItemTypeTwoColumn {
    type: ItemType.TwoColumn;
    left: Item[]
    right: Item[]
}

interface ItemTypeEmpty {
    type: ItemType.Empty
}
interface ItemTypeGeneral {
    type: ItemType.General;
    render: () => ReactNode;
}

export type Item = ItemTypeGeneral | ItemTypeEmpty | ItemTypeTwoColumn | ItemTypeThreeImageInRow | ItemTypeQuote | ItemTypeImage | ItemTypeLogo | ItemTypeParagraph | ItemTypeMainSubTitle | ItemTypeMainTitle | ItemTypeContentTitle;