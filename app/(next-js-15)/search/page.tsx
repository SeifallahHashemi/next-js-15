import React from 'react';
import {getSearchResults} from "@/app/utils/utility";

const SearchPage = async ({searchParams}:{searchParams:{userId:string}}) => {
    const userId = (await searchParams).userId;
    const result = await getSearchResults(userId);
    return (
        <div>
            {result.length > 0 ? (<ul>
                {result.map((item: { id: string | number; title: string }) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>) : (
                <p>No result Found</p>
            )}
        </div>
    );
};

export default SearchPage;