// https://on.cypress.io/api

describe('Tests', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('input[data-login]').type('developer');
        cy.get('input[data-password]').type('skillbox');
        cy.get('button').click();
    });
    it('Просмотр счетов', () => {
        cy.contains('div.account__caption', 'Ваши счета');
    })
    it('Создание счета и перевод на него денег', () => {
        cy.get('select').select('date');
        cy.get('[data-create-account]').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.get('[data-account]').last().then(item => {
            const id = item.data('account');
            cy.get('a[href="/account/74213041477477406320783754"]').click();
            cy.get('input[data-number]').type(id);
            cy.get('input[data-amount]').type('100');
            cy.get('[data-transfer]').click();
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(1000);
            cy.get('[data-back]').click();
            cy.get('a[href="/account/' + id +'"]').click();
            cy.contains('span.account__price', '100 ₽');
        })

    })
    it('Переход к информации о счете', () => {
        cy.get('a[href="/account/74213041477477406320783754"]').click();
        cy.contains('div.account__info', '№ 74213041477477406320783754');
    })
})
