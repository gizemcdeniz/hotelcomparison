import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import womanBot from "./images/woman.svg";
import womanSeeksHelp from "./images/womanSeeksHelp.svg";
import "./index.scss";
import { Redirect } from "react-router-dom";

const CHATBOT_THEME = {
  background: "#FFFEFC",
  fontFamily: "Roboto",
  headerBgColor: "#FFBFB5",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#C8D7C2",
  botFontColor: "#fff",
  userBubbleColor: "#FFBFB5",
  userFontColor: "#fff",
};

const BotRedirectMessage = ({ path, message }) => {
  return (
    <div>
      <p>{message}</p>
      <Redirect to={path} />
    </div>
  );
};

const ChatBotMessages = () => {
  const { t } = useTranslation();

  // Chatbot documentation here: https://lucasbassetti.com.br/react-simple-chatbot/#/
  const steps = [
    {
      id: "1",
      message: t("chatBotMessages.welcomeMessage"),
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: t("chatBotMessages.helpLabel"), trigger: "3" },
        { value: 2, label: t("chatBotMessages.findLabel"), trigger: "4" },
        { value: 3, label: t("chatBotMessages.blogLabel"), trigger: "5" },
        {
          value: 4,
          label: t("chatBotMessages.opportunityLabel"),
          trigger: "6",
        },
      ],
    },
    {
      id: "3",
      component: (
        <div>
          <p
            className="immediateHelpLine"
            dangerouslySetInnerHTML={{
              __html: t("chatBotMessages.immediateHelpMessage", {
                link: '<a href="tel:02126569696">0212 656 96 96</a>',
              }),
            }}
          ></p>
        </div>
      ),
      asMessage: true,
      trigger: 2,
    },
    {
      id: "4",
      component: (
        <BotRedirectMessage
          message={t("chatBotMessages.goToSeekHelpPageText")}
          path="/seekhelp"
        />
      ),
      asMessage: true,
      trigger: 2,
    },
    {
      id: "5",
      component: (
        <BotRedirectMessage
          message={t("chatBotMessages.goToBlogPageText")}
          path="/blog"
        />
      ),
      asMessage: true,
      trigger: 2,
    },
    {
      id: "6",
      component: (
        <BotRedirectMessage
          message={t("chatBotMessages.goToOpportunitiesPageText")}
          path="/opportunities"
        />
      ),
      asMessage: true,
      trigger: 2,
    },
  ];

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot
          headerTitle={t("chatBotMessages.headerTitle")}
          steps={steps}
          floating={true}
          botAvatar={womanBot}
          userAvatar={womanSeeksHelp}
        />
      </ThemeProvider>
    </>
  );
};

export default ChatBotMessages;
