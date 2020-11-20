import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container } from '@components/global';

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
      <Section id="about">
        <Container style={{ position: 'relative' }}>
          <div>
            <h2 style={{ margin: '0 0 1rem 0' }}>About Marfa Schools</h2>
            <p>
              Marfa Schools is a 1A school district with approximately 289
              students and 58 faculty and staff members on the PK-12th Grade
              campus. Marfa Schools is the second largest school district in
              Texas in terms of landmass, spanning more than 3,000 square miles
              of Presidio County and stretching as far south as the banks of the
              Rio Grande. Eighty-four percent of the student body is
              economically disadvantaged.
            </p>
          </div>
        </Container>
      </Section>
    )}
  />
);

export default UsedBy;
