(function() {
   


    let todos = [];
    
    // Parts of date.
    const bodyDay = document.querySelector('.body__day');
    const bodyDate = document.querySelector('.body__date');



    
    const dayNames = [
        'Sunday', 
        'Monday', 
        'Tuesday', 
        'Wednessday', 
        'Thursday', 
        'Friday', 
        'Saturday',
    ];



    // Localstorage handler object.
    const localDB = {
        // localDB.setItem('todos', todos);
        setItem(key, value) {
            value = JSON.stringify(value);
            localStorage.setItem(key, value);
        },



        // localDB.getItem('todos')
        getItem(key) {
            const value = localStorage.getItem(key);
            if (!value) {
                return null;
            }

            return JSON.parse(value);
        },



        // localDB.removeItem('todos');
        removeItem(key) {
            localStorage.removeItem(key);
        }
    };

    // Initialize application.
    const init = () => {
        showDate();
        setListeners();
        loadExistingTodos();
    };

    // Load existing todos.
    const loadExistingTodos = () => {
        const savedTodos = localDB.getItem('todos');
        if (savedTodos) {
            todos = savedTodos;
        }
        
        if (todos && Array.isArray(todos)) {
            todos.forEach( todo => showTodo(todo) );
        }
    };

    // Show date.
    const showDate = () => {
        const currentDate = new Date();
        const day = [
            currentDate.getMonth() + 1, 
            currentDate.getDate(),
            currentDate.getFullYear(), 
        ].map( num => num < 10 ? `0${num}` : num );

        bodyDay.textContent = dayNames[currentDate.getDay()];
        bodyDate.textContent = day.join('-');
    };

    
    
    

    init();
})();
