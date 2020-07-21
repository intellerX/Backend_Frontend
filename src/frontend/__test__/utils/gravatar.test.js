import gravatar from '../../utils/gravatar';

test('Gravatar Function test', () => {
    const email = 'anmevel10@gmail.com';
    const gravatarUrl = 'https://gravatar.com/avatar/6ff315536526431e29b8662e7b168e44';
    expect(gravatarUrl).toEqual(gravatar(email));
});