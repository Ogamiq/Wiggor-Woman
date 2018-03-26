import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Section, HeadSmall, HeadBig, TeamMembers, Person, Pic, TeamName, TeamPosition, TeamMail, Fb} from './team-styles';

export default class Team extends Component {
  render() {
    const Person1 = ({
      src: '../../../img/team/1.jpg',
      alt: "aleksandra Cichoń",
      Fname: "Aleksandra",
      Lname: "Cichoń",
      position: "Koordynator główny",
      email: "aleksandra.cichon@wiggor.pl",
      fb: "https://www.facebook.com/ola.cichon"
    });

    const Person2 = ({
      src: '../../../img/team/2.jpg',
      alt: "Maria Jamrozik",
      Fname: "Maria",
      Lname: "Jamrozik",
      position: "Koordynator ds. Kontaktów zewnętrznych",
      email: "maria.jamrozik@wiggor.pl",
      fb: "https://www.facebook.com/marysia.jamrozik"
    });

    const Person3 = ({
      src: '../../../img/team/3.jpg',
      alt: 'Paulina Pawelec',
      Fname: 'Paulina',
      Lname: 'Pawelec',
      position: 'Koordynator ds. Marketingu',
      email: 'paulina.pawelec@wiggor.pl',
      fb: 'https://www.facebook.com/paulina.pawelec7'
    });

    const Person4 = ({
      src: '../../../img/team/4.jpg',
      alt: 'Katarzyna Chabraś',
      Fname: 'Katarzyna',
      Lname: 'Chabraś',
      position: 'Koordynator ds. Public Relations',
      email: 'katarzyna.chabras@wiggor.pl',
      fb: 'https://www.facebook.com/kasia.chabras'
    });

    return (
        <Section>
        <HeadSmall>POZNAJ NAS</HeadSmall>
        <HeadBig>Nasz zespół</HeadBig>
        <TeamMembers>
        <Person>
            <Pic src={Person1.src} alt={Person1.alt} />
            <TeamName>{Person1.Fname}<br />{Person1.Lname}</TeamName>
            <TeamPosition>{Person1.position}</TeamPosition>
            <TeamMail>{Person1.email}</TeamMail>
            <a href={Person1.fb} ><Fb src="../../../img/fb.svg" /></a>
        </Person>
        <Person>
            <Pic src={Person2.src} alt={Person2.alt} />
            <TeamName>{Person2.Fname}<br />{Person2.Lname}</TeamName>
            <TeamPosition>{Person2.position}</TeamPosition>
            <TeamMail>{Person2.email}</TeamMail>
            <a href={Person2.fb} ><Fb src="../../../img/fb.svg" /></a>
        </Person>
        <Person>
            <Pic src={Person3.src} alt={Person3.alt} />
            <TeamName>{Person3.Fname}<br />{Person3.Lname}</TeamName>
            <TeamPosition>{Person3.position}</TeamPosition>
            <TeamMail>{Person3.email}</TeamMail>
            <a href={Person3.fb} ><Fb src="../../../img/fb.svg" /></a>
        </Person>
        <Person>
            <Pic src={Person4.src} alt={Person4.alt} />
            <TeamName>{Person4.Fname}<br />{Person4.Lname}</TeamName>
            <TeamPosition>{Person4.position}</TeamPosition>
            <TeamMail>{Person4.email}</TeamMail>
            <a href={Person4.fb} ><Fb src="../../../img/fb.svg" /></a>
        </Person>
        </TeamMembers>
        </Section>
    )};
}