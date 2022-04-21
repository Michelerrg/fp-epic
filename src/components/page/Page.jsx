import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPage } from "../../functions/page";
import PageWrite from "../page-write/PageWrite";

export default function Page() {
    const [pages, setPages] = useState([]);
    const { pageSlug } = useParams();
    
    useEffect(() => {
        getPage(pageSlug).then(pages => {
            setPages(pages);
        });
    }, [pageSlug]);

    return (
        <div>
            { pages.map(page => <PageWrite page={page}  key={page.id}/>) }
        </div>
    );
  
}