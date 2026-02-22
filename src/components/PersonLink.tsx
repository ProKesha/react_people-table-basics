import { Person } from '../types/Person';

interface Props {
  person: Person;
}

export const PersonLink = ({ person }: Props) => (
  <a
    href={`#/people/${person.slug}`}
    className={person.sex === 'f' ? 'has-text-danger' : undefined}
  >
    {person.name}
  </a>
);
