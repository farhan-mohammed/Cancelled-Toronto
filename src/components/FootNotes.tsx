import React from 'react';
function wrapUrlWithAnchorTags(referenceString: string) {
    const urlRegex =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    const urlMatch = referenceString.match(urlRegex);

    if (urlMatch) {
        const url = urlMatch[0];
        const startIndex = referenceString.indexOf(url);
        const endIndex = startIndex + url.length;
        const beforeUrl = referenceString.slice(0, startIndex);
        const afterUrl = referenceString.slice(endIndex);
        return (
            <>
                <span>{beforeUrl}</span>{' '}
                <a href={url} target="_blank">
                    {url}
                </a>{' '}
                <span>{afterUrl}</span>
            </>
        );
    }

    return referenceString;
}
export default function FootNotes({ footnotes }: { footnotes: string[] }) {
    return (
        /**Renders a list of footnotes based on the list passed through */
        <ol className="ml-4 pr-2 w-full list-decimal">
            {footnotes.map((text, i) => (
                <li key={i} className=" ">
                    {wrapUrlWithAnchorTags(text)}
                </li>
            ))}
        </ol>
    );
}
