describe("Bring it on", () => {

    it("First test", async () => {
        await browser.url("https://pastebin.com");
    });

    it("Second test", async () => {
        const textAr = await $("//*[@id='postform-text']");
        await textAr.click();
        await textAr.setValue('git config --global user.name "New Sheriff in Town"');
        await browser.keys("\uE007");
        await textAr.addValue('git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")');
        await browser.keys("\uE007");
        await textAr.addValue('git push origin master --force');
        await browser.pause(3000);
        await $("//*[@id='w0']/div[2]/div/div/div").click();
        await browser.pause(3000);
        const synt = await $('//*[@id="w0"]/div[5]/div[1]/div[3]/div');
        await synt.click();
        const setSynt = await $("//li[text()='Bash']");
        await setSynt.click();
        await browser.pause(3000);
        const pastExp = await $('//*[@id="w0"]/div[5]/div[1]/div[4]/div');
        await pastExp.click();
        const setPastExp = await $("//li[text()='10 Minutes']");
        await setPastExp.click();
        await browser.pause(3000);
        await $("//*[@id='postform-name']").setValue("how to gain dominance among developers");
        await $("//*[@id='w0']/div[5]/div[1]/div[10]/button").click();
        await browser.pause(10000);
    });

    it("Third test", async () => {
        const nameTitle = await $("//h1");
        expect(await nameTitle.getText()).toEqual("how to gain dominance among developers");
        const bashSign = await $("/html/body/div[1]/div[2]/div[1]/div[1]/div[4]/div[1]/div[1]/a[1]");
        expect(await bashSign.getText()).toEqual("Bash");
        const firstLine = await $("/html/body/div[1]/div[2]/div[1]/div[1]/div[4]/div[2]/ol/li[1]");
        expect(await firstLine.getText()).toEqual('git config --global user.name "New Sheriff in Town"');
        const secondLine = await $("/html/body/div[1]/div[2]/div[1]/div[1]/div[4]/div[2]/ol/li[2]");
        expect(await secondLine.getText()).toEqual('git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")');
        const thirdLine = await $("/html/body/div[1]/div[2]/div[1]/div[1]/div[4]/div[2]/ol/li[3]");
        expect(await thirdLine.getText()).toEqual('git push origin master --force');
    });
})