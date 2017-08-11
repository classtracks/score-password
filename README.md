# Score Password

A simple, modular password scoring tool that comes with optional common passwords you can use.

## API

`scorePassword` takes a password followed by any number of password arrays. This allows you to customize what passwords are not allowed.

```
scorePassword(password, ...disallowedPasswordsArrays);
```

## Use

```
import commonPasswords from 'score-password/commonPasswords';
import scorePassword from 'score-password';

const score = scorePassword('some-password', commonPasswords, ['other'], ['disallowed'], ['passwords']);
```

## Common passwords

`score-password` comes with an array of common passwords that need to be imported separately. This allows you to choose to use them, and import them dynamically if you wish. To import them do,

```
import commonPasswords from 'score-password/commonPasswords';
```
