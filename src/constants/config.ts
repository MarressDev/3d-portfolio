type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Phillip Marress",
    fullName: "Phillip Marress",
    email: "marressp@gmail.com",
  },
  hero: {
    name: "Phillip",
    p: ["Turning ideas and designs into dynamic, high performance web experiences - one pixel at a time."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "A little about me",
      content: `I’m a software developer with a strong background in JavaScript and TypeScript with hands-on experience with frameworks like React, Node.js, and Three.js. I’m a fast learner who enjoys collaborating with clients and teams to build scalable, user-friendly solutions that solve real-world problems. I'm passionate about turning ideas into impactful digital experiences—let’s connect and create something great!

`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    // feedbacks: {
    //   p: "What others say",
    //   h2: "Testimonials.",
    // },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
