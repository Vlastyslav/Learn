describe("I Can Win", () => {

    it("First test", async () => {
        await browser.url("https://pastebin.com");
        await $("//*[@id='postform-text']").click();
        await $("//*[@id='postform-text']").setValue("John Doe");
        await $("//*[@id='w0']/div[2]/div/div/div/label").click();
        const chkPaste = await $("//*[@id='w0']/div[3]/div/div[6]/div[1]/div/div/div/div[5]/pre/span");
        expect(await chkPaste.getText()).toEqual("John Doe");
    });

    it("Second test", async () => {
        const pastExp = await $("//*[@id='w0']/div[5]/div[1]/div[4]/div/span");
        await pastExp.click();
        const setPastExp = await $("//li[text()='10 Minutes']");
        await setPastExp.click();
        expect(await pastExp.getText()).toEqual("10 Minutes");
    });

    it("Third test", async () => {
        await $("//*[@id='postform-name']").setValue("helloweb");
        await $("//*[@id='w0']/div[5]/div[1]/div[10]/button").click();
        const nameTitle = await $("//h1");
        expect(await nameTitle.getText()).toEqual("helloweb");
    });
})