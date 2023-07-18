const {useEffect} = require("react");

const useDocumentTitle = function(title) {

  useEffect(() => {

    document.title = title;

  }, [title]);

};

export default useDocumentTitle;