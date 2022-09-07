# songlyrics

Search a lyrics. It scrapes the lyrics from unofficial sources.

**THIS IS A FORK. GO TO [@vookav2/songlyrics](https://github.com/vookav2/songlyrics) FOR ORIGINAL CODE.**
<details>
  <summary>Table of contents</summary>
  <ol>
     <li>
       <a href="#getting-started">Getting Started</a>
       <ul>
         <li>
           <a href="#prerequisites">Prerequisites</a>
         </li>
         <li>
           <a href="#installation">Installation</a>
         </li>
       </ul>
     </li>
    <li>
       <a href="#usage">Usage</a>
       <ul>
         <li>
           <a href="#output">Output</a>
         </li>
       </ul>
     </li>
    <li>
       <a href="#contributing">Contributing</a>
     </li>
    <li>
       <a href="#disclaimer">Disclaimer</a>
     </li>
    <li>
       <a href="#license">License</a>
     </li>
  </ol>
</details>

## Getting Started

### Prerequisites

- [Node.js][nodejs] v16 or greater
  ```
  node --version
  ```

### Installation

```sh
npm install Eithoo/songlyrics
```

## Usage

Import functions that you need.

```ts
import songlyrics from 'songlyrics'
const lyrics = songlyrics.default;

const response = await songlyrics('Something Special Pop Smoke')
```

### Output
<details>
<summary>Example</summary>

```js
{
  title: 'Pop Smoke - Something Special Lyrics',
  lyrics: 'I think you are (You are) something special\n' +
    "I'll take you on a shopping spree (Oh, yeah)\n" +
    "'Cause I'm so into you (Oh)\n" +
    "I'm so into you (I love you, baby)\n" +
    "I'm so into you (Oh, my)\n" +
    "I'm so into you (To you), baby (Baby)\n" +
    '\n' +
    'What you like? What you wear?\n' +
    'Say the name, say the price, put them diamonds on your ear\n' +
    "Shinin' like a chandelier\n" +
    "What's your thoughts? What's your fears?\n" +
    "Yeah, I need that real love (Real love), talkin' Bobby and Whitney (Whitney)\n" +
    "You don't gotta worry 'bout nothin' as long as you with me (With me, look)\n" +
    "'Cause shit could get sticky, that's why I keep a glizzy\n" +
    'Ride around through my city (Woo)\n' +
    'Fuck Cassandra, Kanesha, Kaneeka and Tisha, Lisa and Tricia (Fuck them hoes, uh)\n' +
    "Fuck them hoes 'cause I don't need them, all them bitches treeshas\n" +
    "They ain't in the field, they on the bleachers (Treeshas)\n" +
    'On your back, I start applying that lotion (Yeah, lotion)\n' +
    "So deep, I'ma go in, pullin' all on your sew-in (Sew-in)\n" +
    "I'm Pop Smoke, but you know all my governments\n" +
    "All that gangster shit, she be lovin' it\n" +
    "She love how I'm thuggin' it (Oh, you like that)\n" +
    'Shawty brown and petite (Yeah)\n' +
    'Fly and discreet, a demon in the sheets\n' +
    'Mother was a lawyer, her father the police\n' +
    'They be working long hours, so she always had the free\n' +
    'She said I could come with her if it get hot up in the streets\n' +
    "'Cause I'm a 'rilla in the jungle and a shark up in the sea\n" +
    'She like, "Papi, you so fire, but get up out the streets"\n' +
    `I'm like, "Baby, what you mean?" (What you mean?)\n` +
    'Look\n' +
    '\n' +
    'I think (Baby) you are\n' +
    'You are (You are) something special (My girl)\n' +
    "I'll take you on a shopping spree\n" +
    "'Cause I'm so into you (To you)\n" +
    "I'm so into you (You are)\n" +
    "I'm so into you\n" +
    "I'm so into you, baby (Baby)\n" +
    '\n' +
    'Baby (Baby)\n' +
    'You are (You are) my girl (My girl)\n' +
    'You are (You are) my girl\n' +
    '\n' +
    '(I think) You are (You are)\n' +
    'You are (You are) something special (Oh, yeah)\n' +
    "I'll take you on a shopping spree (Oh, baby)\n" +
    "'Cause I'm so into you (Baby)\n" +
    "I'm so into you (You are)\n" +
    "I'm so into you (My girl)\n" +
    "I'm so into you (You are), baby (My girl)",
  source: {
    name: 'Genius',
    url: 'genius.com',
    link: 'https://genius.com/Pop-smoke-something-special-lyrics'
  }
}
```

</details>
<details>
<summary>model</summary>
<p>

```js
{
  lyrics: string,
  source: {
    name: string,
    url: string,
    link: string,
  },
}
```

</p>
</details>

## Contributing

Contributions, issues and feature requests are welcome. Feel free to check [issues][issues] page if you want to contribute.


## Disclaimer

This project is not affiliated with, endorsed, or sponsored by YouTube or any of their affiliates or subsidiaries. All trademarks, logos and brand names are the property of their respective owners, and are used only to directly describe the services being provided, as such, any usage of trademarks to refer to such services is considered nominative use.

## License

Distributed under the [MIT](https://github.com/vookav2/songlyrics/blob/main/LICENSE) License.

([⬆ back to top](#songlyrics))
