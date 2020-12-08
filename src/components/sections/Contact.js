import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_work: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="contact" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <div>
            <h2 style={{ margin: '0 0 1rem 0' }}>Contact</h2>
            <p>
              For more information, please contact the Marfa I.S.D. Parent
              Teacher Organization at{' '}
              <StyledExternalLink href="mailto:PTOMarfa@gmail.com">
                PTOMarfa@gmail.com
              </StyledExternalLink>
              .
            </p>
          </div>
        </Container>
      </Section>
    )}
  />
);

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: underline;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default UsedBy;
