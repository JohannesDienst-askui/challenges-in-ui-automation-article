const { openBrowser, goto, write, closeBrowser, textBox, waitFor, toLeftOf } = require('taiko');

(async () => {
    await openBrowser();
    await goto("file:///<Absolute path to minimalExamplePage.html>");

    await textBox(toLeftOf('Login')).exists();
    await write("Poweruser", into(textBox(toLeftOf('Login'))));

    // Keep the browser open to see what taiko has done
    await waitFor(3000);
    await closeBrowser();
})();