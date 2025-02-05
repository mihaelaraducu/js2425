// Teste Jasmine pentru validarea emailului
describe("Validare email", () => {
    it("trebuie să returneze true pentru un email valid", () => {
        expect(valideazaEmail("test@example.com")).toBeTruthy();
    });

    it("trebuie să returneze false pentru un email fără caracterul @", () => {
        expect(valideazaEmail("testexample.com")).toBeFalsy();
    });

    it("trebuie să returneze false pentru un email fără domeniu", () => {
        expect(valideazaEmail("test@.com")).toBeFalsy();
    });

    it("trebuie să returneze false pentru un email fără punct în domeniu", () => {
        expect(valideazaEmail("test@examplecom")).toBeFalsy();
    });

    it("trebuie să returneze false pentru un email cu spații", () => {
        expect(valideazaEmail("test @example.com")).toBeFalsy();
    });
});
