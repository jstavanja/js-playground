/**
 * Console debugging techniques playground.
 * 
 * Inspired by: https://blog.siddu.tech/7-console-log-alternatives
 */

import entryPoint from "./trace";
import logUsers from "./table";
import functionThatRunsOnActiveUsers from "./assert";
import countUserValidationCalls from "./count";
import timeAsyncCall from "./time";
import logEverything from "./group";

// console.trace
entryPoint();

// console.table
logUsers();

// console.assert
functionThatRunsOnActiveUsers();

// console.count
countUserValidationCalls();

// console.time
timeAsyncCall();

// console.group & console.groupCollapsed
logEverything();
