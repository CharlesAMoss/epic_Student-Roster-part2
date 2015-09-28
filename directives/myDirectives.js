courseRoster.directive('hometext', function() {
    return {
        template: 'Back to beginning'
    }
});

courseRoster.directive("changeClass", function() {
    return function (scope, element, attrs) {
        element.bind("click", function() {
            element.toggleClass(attrs.changeClass);
        });
    }
});

courseRoster.directive("sampleCourse", function() {
    return {
        template: 'almost right details'
        // link: function (scope) {
        //     scope.details = "Right Details";
        }

});
