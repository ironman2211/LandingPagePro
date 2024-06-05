import { Template } from "@/interfaces";


// Define the templates array
const templates: Template[] = [
  {
    type: 'template1',
    baseColor: "blue",
    components: {
      header: {
        title: "c1",
        logo: "https://source.unsplash.com/random/200x200?sig=1",
        loginButton: true
      },
      main: {
        text: "text1",
        description: "lorem10 dbhjasbdasd jdas",
        imageUrl: 'https://source.unsplash.com/random/200x200?sig=2',
      },
      footer: {
        text: "footer1"
      }
    }
  },
  {
    type: 'template4',
    baseColor: "green",
    components: {
      header: {
        title: "c2",
        logo: "https://source.unsplash.com/random/200x200?sig=3",
        loginButton: false
      },
      main: {
        text: "text2",
        description: "lorem10 dbhjasbdasd jdas",
        imageUrl: 'https://source.unsplash.com/random/200x200?sig=4',
      },
      footer: undefined
    }
  },
  {
    type: 'template3',
    baseColor: "red",
    components: {
      header: {
        title: "c3",
        logo: "https://source.unsplash.com/random/200x200?sig=5",
        loginButton: true
      },
      main: {
        text: "text3",
        description: "lorem10 dbhjasbdasd jdas",
        imageUrl: 'https://source.unsplash.com/random/200x200?sig=6',
      },
      footer: {
        text: "footer3"
      }
    }
  },
  {
    type: 'template3',
    baseColor: "purple",
    components: {
      header: {
        title: "c4",
        logo: "https://source.unsplash.com/random/200x200?sig=7",
        loginButton: false
      },
      main: {
        text: "text4",
        description: "lorem10 dbhjasbdasd jdas",
        imageUrl: 'https://source.unsplash.com/random/200x200?sig=8',
      },
      footer: {
        text: "footer4"
      }
    }
  },
  {
    type: 'template2',
    baseColor: "orange",
    components: {
      header: {
        title: "c5",
        logo: "https://source.unsplash.com/random/200x200?sig=9",
        loginButton: true
      },
      main: {
        text: "text5",
        description: "lorem10 dbhjasbdasd jdas",
        imageUrl: 'https://source.unsplash.com/random/200x200?sig=10',
      },
      footer: {
        text: "footer5"
      }
    }
  },
  {
    type: 'template2',
    baseColor: "yellow",
    components: {
      header: {
        title: "c6",
        logo: "https://source.unsplash.com/random/200x200?sig=11",
        loginButton: false
      },
      main: {
        text: "text6",
        description: "lorem10 dbhjasbdasd jdas",
        imageUrl: 'https://source.unsplash.com/random/200x200?sig=12',
      },
      footer: {
        text: "footer6"
      }
    }
  },
  {
    type: 'template4',
    baseColor: "cyan",
    components: {
      header: {
        title: "c7",
        logo: "https://source.unsplash.com/random/200x200?sig=13",
        loginButton: true
      },
      main: {
        text: "text7",
        description: "lorem10 dbhjasbdasd jdas",
        imageUrl: 'https://source.unsplash.com/random/200x200?sig=14',
      },
      footer: {
        text: "footer7"
      }
    }
  },
  {
    type: 'template1',
    baseColor: "pink",
    components: {
      header: {
        title: "c8",
        logo: "https://source.unsplash.com/random/200x200?sig=15",
        loginButton: false
      },
      main: {
        text: "text8",
        description: "lorem10 dbhjasbdasd jdas",
        imageUrl: 'https://source.unsplash.com/random/200x200?sig=16',
      },
      footer: {
        text: "footer8"
      }
    }
  },
  {
    type: 'template1',
    baseColor: "lime",
    components: {
      header: {
        title: "c9",
        logo: "https://source.unsplash.com/random/200x200?sig=17",
        loginButton: true
      },
      main: {
        text: "text9",
        description: "lorem10 dbhjasbdasd jdas",
        imageUrl: 'https://source.unsplash.com/random/200x200?sig=18',
      },
      footer: undefined
    }
  },
];


// Export the getTemplates function
export const getTemplates = (): Promise<Template[]> => {
  return new Promise((resolve) => {
    // Simulate asynchronous data fetching
    resolve(templates);
  });
};
