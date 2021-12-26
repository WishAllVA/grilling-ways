import React, { useState, useEffect } from "react";
import Bookmark from "../../types/Bookmark";

interface BookmarksProps {
    bookmarks: Bookmark[];
}

const Bookmarks: React.FC<BookmarksProps> = ({ bookmarks }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.localStorage.getItem("jwt")) {
                setIsLoggedIn(true);
                // window.location.href = "/";
            }
        }
    }, []);

    return (
        <div>
            {
                isLoggedIn === true ?
                    <div>
                        < h1 > Bookmarks</h1 >
                    </div > :
                    < div > Not Logged in</div >
            }
        </div>
    );
}

export default Bookmarks;