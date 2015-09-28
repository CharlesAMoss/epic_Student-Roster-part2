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

// courseRoster.directive("sampleCourse", function() {
//     return {
//         scope: {
//             details: '@'
//         },
//         template: '<div>{{details}} Details</div>'
//     }
// });

courseRoster.directive("sampleCourse", function() {
    return {
        scope: {
            details: '@'
        },
        template: '<div>{{details}} Details</div>'
    }
});
