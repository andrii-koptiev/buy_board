import { capitalize } from 'lodash';
import { NavSections } from '../../enums';

const navLinks = Object.values(NavSections);
const activeClass = 'bg-purple text-white';
const inActiveClass = 'text-gray-400';

describe('Navigation', () => {
  it('should be all nav links displayed, have cursor pointer and expected navigation', () => {
    cy.visit('/');

    navLinks.forEach(navLink => {
      cy.get(`[data-testid=nav-link-${navLink}]`)
        .should('be.visible')
        .should('have.class', 'cursor-pointer')
        .should('have.text', capitalize(navLink))
        .click();

      cy.url().should('include', `/${navLink}`);
    });
  });

  it('active link have correct styles', () => {
    cy.visit('/');

    cy.get(`[data-testid=nav-link-${navLinks[0]}]`)
      .click()
      .should('have.class', activeClass);
  });

  it('should change styles active to inactive', () => {
    cy.visit('/');
    if (navLinks.length < 2) {
      return;
    }

    cy.get(`[data-testid=nav-link-${navLinks[0]}]`).click();

    cy.get(`[data-testid=nav-link-${navLinks[1]}]`).should(
      'have.class',
      inActiveClass
    );

    cy.get(`[data-testid=nav-link-${navLinks[1]}]`)
      .click()
      .should('have.class', activeClass);

    cy.get(`[data-testid=nav-link-${navLinks[0]}]`).should(
      'have.class',
      inActiveClass
    );
  });
});
