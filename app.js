
    // BUDGET CONTROLLER
var budgetController = (function () {

    // SomeCode

})();


// UI CONTROLLER
var UIController = (function() {

    // SomeCode

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        console.log('radi');
    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        
        if (event.keyCode === 13 ) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);