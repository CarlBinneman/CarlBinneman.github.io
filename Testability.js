//The functional system / feature we are implementing is a menu that can be toggled on and off
//The function below is the logical unit that determines how the toggle functionality works

function ToggleMenu(menuWasOpen, openMenu, closeMenu) {
	//Our function is fully deterministic becuase its input and activity are fully determined by the arguments above
	//Our function only defines functionality and has no variables hidden from wherever this unit is run
	//Below is the fuinctionality of the unit
	if (menuWasOpen) {
		closeMenu(); //We run definable methods
		//This allows this function to only be responsible for its functionality. It does not rely on close/openMenu
	} else {
		openMenu();
	}
}

//Create a unit test that fully describes a use case
function ToggleMenu_WasClosed_ShouldOpen() {
	//Arrange : Prepare all that is needed for the  test
	let menuIsOpen = 0; //Create a variable to determine if the menu is responding correctly

	//Act : Run the functional unit we are testing
	ToggleMenu(
		//The first argument is false, because our use case is running from the "WasClosed" state
		false,
		//This defines a function with no arguments, it doesnt have a name because it is assigned and run
		() => {
			//Set our tracking variable to something distinct for this action
			menuIsOpen = 1;
		},
		//Similar to above but executes at a different point
		() => {
			menuIsOpen = 2;
		}
	);

	//Assert : State the condition that is expected followed by a helpful message if it fails
	console.assert(menuIsOpen == 1, "Toggle Menu failed to open");
}
ToggleMenu_WasClosed_ShouldOpen(); //Actually run your test
//It will log nothing to the console if successful and should not have a noticeable run time

//Below is the complimentary test that check the other state our feature can be in
function ToggleMenu_WasOpen_ShouldClose() {
	let menuIsOpen = 0;

	ToggleMenu(
		true,
		() => {
			menuIsOpen = 1;
		},
		() => {
			menuIsOpen = 2;
		}
	);

	console.assert(menuIsOpen == 2, "Toggle Menu failed to close");
}
ToggleMenu_WasOpen_ShouldClose();
