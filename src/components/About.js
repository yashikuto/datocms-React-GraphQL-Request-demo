import React, { useEffect, useState } from "react";
import client from "../client.js";
import { Image } from "react-datocms";

const Authors = () => {
  const [HTMLs, setHTMLs] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const result = await client.request(query);
        console.log(result);
        // setHTMLs(result.HTMLs);
        setIsFetching(false);
      } catch (error) {
        console.error(JSON.stringify(error, undefined, 2));
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      {isFetching ? (
        <p className="Home-li-title">...Loading</p>
      ) : (
        <div>
          {/* {HTMLs &&
            HTMLs.map(author => (
              <div className="About-author" key={author.id}>
                <div className="About-infoHeader">
                  <Image
                    className="About-img"
                    data={author.avatar.responsiveImage}
                  />
                  <h2>{author.name}</h2>
                </div>
                <p>{author.description}</p>
              </div>
            ))} */}
          check console.
        </div>
      )}
    </section>
  );
};

const query = `
query htmls {
  allHtmlCodes {
    html {
      markdownEnabled(markdown: true)
    }
  }
}
`;

export default Authors;
