var transform = require("./transform");
var QUnit = require("steal-qunit");

QUnit.test('basics', function (assert) {
    var hydrateTransfomer = {
        start: "page.start",
        end: "page.end"
    };

    var serializeTransformer = {
        "page.start": "start",
        "page.end": "end"
    };
    assert.deepEqual(
        transform({ start: 1, end: 2 }, hydrateTransfomer),
        {page: {start: 1, end: 2}});

    assert.deepEqual(
        transform({page: {start: 1, end: 2}}, serializeTransformer),
        { start: 1, end: 2 });
});
