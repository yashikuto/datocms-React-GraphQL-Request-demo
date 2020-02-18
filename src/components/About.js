import React, { useEffect, useState } from "react";
import client from "../client.js";
import { Image } from "react-datocms";
import Parser from "html-to-react";

const Authors = () => {
  var htmlToReactParser = new HtmlToReactParser();
  const [HTMLs, setHTMLs] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const result = await client.request(query);
        console.log(result);
        setHTMLs(result.allHtmlCodes[0].html[0].markdownEnabled);
        setIsFetching(false);
      } catch (error) {
        console.error(JSON.stringify(error, undefined, 2));
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  const newElement = htmlToReactParser.parse(HTMLs);

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
          <div dangerouslySetInnerHTML={{ __html: HTMLs }}></div>
          <div>{HTMLs}</div>
          <div>{newElement}</div>
        </div>
      )}
    </section>
  );
};

// {
//   "allHtmlCodes": [
//     {
//       "html": [
//         {
//           "markdownEnabled": "<p><strong>HELLOW</strong></p>\n"
//         }
//       ]
//     }
//   ]
// }

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
