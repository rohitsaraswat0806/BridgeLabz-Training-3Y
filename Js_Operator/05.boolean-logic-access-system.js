// Q5. Boolean Logic Access System

// Security condition values
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check all required conditions and display the result
function checkSecurity() {
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // Use logical NOT to display the opposite status as an additional check
    if (isSecure) {
        console.log("Secure");
    } else if (!isSecure || !isAlarmOn) {
        console.log("Unsafe");
    }

    // OR can be used to detect whether any opening is unsecured
    const isOpeningUnsecured = !isDoorLocked || !isWindowClosed;
    console.log(`Door/window unsecured: ${isOpeningUnsecured}`);
}

// Test multiple outcomes
checkSecurity();

isOwnerInside = false;
checkSecurity();

isOwnerInside = true;
isWindowClosed = false;
checkSecurity();
