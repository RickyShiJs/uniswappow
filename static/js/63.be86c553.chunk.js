(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[63],{1586:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var r={messages:{Accept:"Godta",Acknowledge:"Anerkjenne",Allow:"Tillate","Allow in your wallet":"Tillat i lommeboken","Allow {0} first":["Tillat ",["0"]," f\xf8rst"],"Allowance pending":"Godtgj\xf8relse venter","An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Det oppstod en feil under fors\xf8ket p\xe5 \xe5 utf\xf8re dette byttet. Det kan hende du m\xe5 \xf8ke glidetoleransen. Hvis det ikke fungerer, kan det v\xe6re en inkompatibilitet med symbolet du handler. Merk: gebyr ved overf\xf8ring og rebase-tokens er inkompatibelt med Uniswap V3.","Approval pending":"Venter p\xe5 godkjenning",Approve:"Godkjenn","Approve in your wallet":"Godkjenne i lommeboken","Approve {0} first":["Godkjenn ",["0"]," f\xf8rst"],Auto:"Auto","Auto Router":"Auto-ruter",Close:"Lukk","Confirm in your wallet":"Bekreft i lommeboken","Confirm swap":"Bekreft bytte","Connect wallet":"Koble til lommebok","Connect wallet to swap":"Koble til lommebok for \xe5 bytte","Connecting\u2026":"Kobler til\u2026","Convert {0} to {1}":["Konverter ",["0"]," til ",["1"]],"Disconnect wallet":"Koble fra lommeboken",Dismiss:"Avvis","Enter an amount":"Oppgi et bel\xf8p","Error details":"Feilmeldingsdetaljer","Error fetching trade":"Feil under henting av handel","Fetching best price\u2026":"F\xe5r best pris\u2026",For:"For","High price impact":"H\xf8y prisp\xe5virkning","High slippage":"H\xf8y utglidning","High slippage increases the risk of price movement":"H\xf8y glidning \xf8ker risikoen for prisbevegelser","I don't have a wallet":"Jeg har ikke lommebok","Insufficient liquidity in the pool for your trade":"Utilstrekkelig likviditet i bassenget for handelen din","Insufficient {0} balance":["Utilstrekkelig ",["0"]," saldo"],"Invalid recipient":"Ugyldig mottaker","Liquidity provider fee":"Likviditetstilbyderavgift",Max:"Maks","Max slippage":"Maks glidning","Maximum sent":"Maksimum sendt","Minimum received":"Minimum mottatt","Missing dependencies":"Mangler avhengigheter","No results found.":"Ingen resultater.","No tokens are available on this network. Please switch to another network.":"Ingen tokens er tilgjengelig p\xe5 dette nettverket. Vennligst bytt til et annet nettverk.",OFF:"AV",ON:"P\xc5","Output is estimated. You will receive at least {0} {1} or the transaction will revert.":["Utgang er estimert. Du vil motta minst ",["0"]," ",["1"]," eller transaksjonen g\xe5r tilbake."],"Output is estimated. You will send at most {0} {1} or the transaction will revert.":["Utgang er estimert. Du sender maksimalt ",["0"]," ",["1"]," eller transaksjonen g\xe5r tilbake."],"Please enter a valid slippage %":"Vennligst skriv inn en gyldig slip %","Powered by the Uniswap protocol":"Drevet av Uniswap-protokollen","Price impact":"Prisp\xe5virkning","Price updated":"Pris oppdatert","Recent transactions":"Nylige transaksjoner","Reload the page":"Last inn siden p\xe5 nytt",Reset:"Nullstille","Review swap":"Anmeldelsesbytte","Search by token name or address":"S\xf8k etter symbolnavn eller adresse","Select a token":"Velg en pollett",Settings:"Innstillinger","Slippage tolerance":"Toleranse for sammenf\xf8yning","Something went wrong.":"Noe gikk galt.",Swap:"Bytt","Swap confirmed":"Bytte bekreftet","Swap details":"Bytt detaljer","Swap failed: {0}":["Bytting mislyktes: ",["0"]],"Swap pending":"Bytte venter","Swap summary":"Bytte sammendrag","The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.":"Uniswap-invarianten x * y = k ble ikke tilfreds med byttet. Dette betyr vanligvis at en av pollettene du bytter inneholder tilpasset oppf\xf8rsel ved overf\xf8ring.","The input token cannot be transferred. There may be an issue with the input token.":"Inngangspolletten kan ikke overf\xf8res. Det kan v\xe6re et problem med inndatapolletten.","The output token cannot be transferred. There may be an issue with the output token.":"Utgangspolletten kan ikke overf\xf8res. Det kan v\xe6re et problem med utgangspolletten.","The output token cannot be transferred. There may be an issue with the output token. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Utgangstokenet kan ikke overf\xf8res. Det kan v\xe6re et problem med utgangstokenet. Merk: gebyr ved overf\xf8ring og rebase-tokens er inkompatibelt med Uniswap V3.","The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.":"Transaksjonen kunne ikke sendes fordi fristen er passert. Kontroller at transaksjonsfristen ikke er for lav.","This transaction will not succeed due to price movement. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Denne transaksjonen vil ikke lykkes p\xe5 grunn av prisbevegelse. Pr\xf8v \xe5 \xf8ke glidetoleransen. Merk: gebyr ved overf\xf8ring og rebase-tokens er inkompatibelt med Uniswap V3.","This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.":"Denne transaksjonen vil ikke lykkes p\xe5 grunn av prisbevegelse eller gebyr ved overf\xf8ring. Pr\xf8v \xe5 \xf8ke glidetoleransen.","Transaction confirmed":"Transaksjonen bekreftet","Transaction deadline":"Transaksjons frist","Transaction pending":"Transaksjonen venter","Transaction rejected.":"Transaksjonen ble avvist.","Try increasing your slippage tolerance.<0/>NOTE: Fee on transfer and rebase tokens are incompatible with Uniswap V3.":"Pr\xf8v \xe5 \xf8ke utglidningstoleransen.<0/>MERK: Gebyr ved overf\xf8ring og rebase-tokens er inkompatible med Uniswap V3.","Unexpected error. Could not estimate gas for the swap.":"Uventet feil. Kunne ikke estimere gass for byttet.","Unexpected issue with estimating the gas. Please try again.":"Uventet problem med estimering av gassen. V\xe6r s\xe5 snill, pr\xf8v p\xe5 nytt.","Unknown error{0}. Try increasing your slippage tolerance. Note: fee on transfer and rebase tokens are incompatible with Uniswap V3.":["Ukjent feil",["0"],". Pr\xf8v \xe5 \xf8ke glattoleransen. Merk: gebyr ved overf\xf8ring og rebase -tokens er inkompatibelt med Uniswap V3."],"Unsupported network - switch to another to trade":"Ikke st\xf8ttet nettverk - bytt til et annet for \xe5 handle","Unwrap confirmed":"Utpakking bekreftet","Unwrap pending":"Utpakning venter","Unwrap {0}":["Pakk ut ",["0"]],"View on Etherscan":"Utsikt p\xe5 Etherscan","Wrap {0}":["Pakk inn ",["0"]],"Your transaction will revert if it has been pending for longer than this period of time.":"Transaksjonen din vil g\xe5 tilbake hvis den har v\xe6rt ventende i lengre tid enn denne perioden.","Your transaction will revert if the price changes unfavorably by more than this percentage.":"Transaksjonen din vil bli gjenopprettet hvis prisendringene er vesentlig mer enn denne prosentandelen.",minutes:"minutter","{caption}":[["caption"]],"{integrator} fee":[["integrator"]," gebyr"],"{min}m {sec}s":[["min"],"m ",["sec"],"s"],"{sec}s":[["sec"],"s"]}}}}]);
//# sourceMappingURL=63.be86c553.chunk.js.map