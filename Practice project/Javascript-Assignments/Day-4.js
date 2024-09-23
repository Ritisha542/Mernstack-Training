//1)--
function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}
delayedMessage('Hello, this message is delayed!', 2000);

//2)--
function countdown(number) {
    const intervalId = setInterval(() => {
        console.log(number);
        number--;
        if (number < 0) {
            clearInterval(intervalId);
            console.log('Countdown finished!');
        }
    }, 1000);
}
countdown(5); 

//3)--
function countdown(number, callback) {
    const intervalId = setInterval(() => {
        console.log(number);
        number--;
        if (number < 0) {
            clearInterval(intervalId);
            console.log('Countdown finished!');
            if (callback) {
                callback();
            }
        }
    }, 1000);
}
countdown(5, () => {
    console.log('Callback executed: The countdown has completed!');
});

//4)--
function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}
wait(2000)
    .then(() => {
        console.log('Promise resolved after 2 seconds!');
    });

//5)--
function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

function countdown(number) {
    return new Promise(async (resolve) => {
        while (number >= 0) {
            console.log(number);
            await wait(1000);
            number--;
        }
        console.log('Countdown finished!');
        resolve();
    });
}
countdown(5).then(() => {
    console.log('Promise resolved: The countdown has completed!');
});

//6)--
function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

function delayedLogSequence(messages, delays) {
    return new Promise(async (resolve) => {
        for (let i = 0; i < messages.length; i++) {
            console.log(messages[i]);
            await wait(delays[i]); // Wait for the specified delay for each message
        }
        resolve(); // Resolve the promise after all messages are logged
    });
}

// Example usage
const messages = ['First message', 'Second message', 'Third message'];
const delays = [1000, 2000, 1500]; // Delays in milliseconds

delayedLogSequence(messages, delays).then(() => {
    console.log('All messages logged in sequence!');
});

//7)--
function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

async function delayedLogSequence(messages, delays) {
    for (let i = 0; i < messages.length; i++) {
        console.log(messages[i]);
        await wait(delays[i]); // Wait for the specified delay for each message
    }
    console.log('All messages logged in sequence!');
}

// Example usage
const message = ['First message', 'Second message', 'Third message'];
const delay = [1000, 2000, 1500]; // Delays in milliseconds

// Call the async function
delayedLogSequence(messages, delays);

//8)--
function waitRandomDelay() {
    return new Promise((resolve) => {
        // Generate a random delay between 1000ms (1s) and 5000ms (5s)
        const randomDelay = Math.floor(Math.random() * 4000) + 1000;
        setTimeout(() => {
            resolve(randomDelay);
        }, randomDelay);
    });
}

async function randomDelayMessage(message) {
    const delay = await waitRandomDelay(); // Wait for a random delay
    console.log(`Message: "${message}" logged after ${delay / 1000} seconds.`);
}

// Example usage
randomDelayMessage('This is a random delay message!');

//9)--
function repeatAction(action, interval, duration) {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            action(); // Execute the action
        }, interval);
        
        // Set a timeout to stop the repeating action after the specified duration
        setTimeout(() => {
            clearInterval(intervalId); // Clear the interval
            resolve(); // Resolve the promise
        }, duration);
    });
}

// Example usage
repeatAction(() => {
    console.log('Action executed!');
}, 1000, 5000) // Executes the action every 1 second for 5 seconds
.then(() => {
    console.log('Repeating action has stopped.');
});







