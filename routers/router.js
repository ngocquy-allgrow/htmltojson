const HtmlToJsonControllerClass =  require('../app/controllers/HtmlToJsonController');
const HtmlToJsonController      = new HtmlToJsonControllerClass();

// html-to-json
router.group("/", (router) => {
    router.get('/', HtmlToJsonController.index);
});

module.exports = router;