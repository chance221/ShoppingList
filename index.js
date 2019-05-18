


function handleClicks(){
    
    
    let listForm = $('#js-shopping-list-form');
    
     

    listForm.submit( event => {

        let item = listForm.find($("input[name='shopping-list-entry']"));
        let itemValue = item.val();
           
    
        function addItems(itemValue){
        
            $('.shopping-list').append($(
                    `<li>
                        <span class = "shopping-item">${itemValue}</span>
                        <div class = "shopping-item-controls">
                            <button class = "shopping-item-toggle">
                                <span class = "button-label">check</span>
                            </button>
                            <button class = "shopping-item-delete">
                                <span class = "button-label">delete</span>
                            </button>
                        </div>
                    </li>`)
            )
        };

        event.preventDefault();

        addItems(itemValue);
    });
    
    toggleChecked();
    deleteItems();
    
    
}

function toggleChecked(){
    $(".shopping-list").on('click', "li > div > .shopping-item-toggle", function(event){
             
        $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked");
         
    });
}

function deleteItems(){
    $(".shopping-list").on('click', "li > div > .shopping-item-delete", function(event){
        $(this).closest('li').remove();
    })
}

handleClicks();

