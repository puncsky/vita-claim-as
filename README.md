# vita-claim-as

A JS script helps you claim VITA.

```bash
nvm use 10.15.1
npm install


cp .env.tmpl .env
```

and specify your configs in `.env`

```text
ACCOUNT_PRIVATE_KEY=
STAKE_OWNER_IO_ADDRESS=
STAKE_OWNER_SIGNATURE=
```

Then run it with

```bash
npm start
```

## Scripts

- `npm run build`: build source code from `src` to `dist`
- `npm publish`: publish code to npm
- `npm run changelog-patch` bump version patch (bug fixes)
- `npm run changelog-minor` bump version minor (new features)
- `npm run changelog-major` bump version major (breaking change)
