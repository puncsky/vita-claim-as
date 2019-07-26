# vita-claim-as

A JS script helps you claim VITA. To learn more about VITA and get instructions for setting up your wallet check [here](https://medium.com/iotex/claiming-vita-step-by-step-instructions-d3e47da997db).

I added a cron job to run everyday at 12pm PST so you can claim your daily rewards. The redemption time for daily rewards increments by an hour everyday but don't worry you won't miss out as long as you keep it running! :)

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
