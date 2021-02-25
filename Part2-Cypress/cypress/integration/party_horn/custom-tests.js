describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Lab8/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Audio element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('Sound image changes when party horn radio button is selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
  });

  it('Audio src changes when party horn radio button is selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  it('Volume image changes when volume input changes to 0', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  it('Volume image changes when volume input changes to 33', () => {
    cy.get('#volume-number').clear().type('33');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('Volume image changes when volume input changes to 66', () => {
    cy.get('#volume-number').clear().type('66');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('Volume image changes when volume input changes to 100', () => {
    cy.get('#volume-number').clear().type('100');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('Honk button is disabled when volume input is empty', () => {
    cy.get('#volume-number').clear()
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled', 'disabled');
    });
  });

  it('Honk button is disabled when volume input is non-numerical', () => {
    cy.get('#volume-number').clear().type('test')
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled', 'disabled');
    });
  });

  it('Error is thrown when volume input is out of range', () => {
    cy.get('#volume-number').clear().type('-100');
    cy.get('#volume-number:invalid').should('have.length', 1);
  });
});
