import logo from './logo-distributedpress.png'

export default {
  docsRepositoryBase: 'https://github.com/hyphacoop/docs.distributed.press/tree/main/',
  logo: <img style={{ height: '2em' }} src={logo.src} />,
  logoLink: "https://docs.distributed.press",
  project: {
    link: 'https://github.com/hyphacoop/api.distributed.press',
  },
  nextThemes: {
    defaultTheme: 'light'
  },
  footer: {
    text: <div>
      <p><a href="https://hypha.coop" target="_blank">Hypha Worker Co-operative Inc.</a> {new Date().getFullYear()} ©</p>
      <p>Hypha acknowledges the sacred land we work on is the territory of many nations and was the subject of the Dish with One Spoon Wampum Belt Covenant, an agreement to peaceably share and care for the resources around the Great Lakes. Today it is still home to many First Nations, Inuit, and Métis peoples from across Turtle Island.</p>
    </div>,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Distributed Press'
    }
  },
  head: (<>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="/img/favicon-96x96.png"/>
  </>)
}
