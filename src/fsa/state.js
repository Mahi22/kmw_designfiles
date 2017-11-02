export const enquiry_overview = {
  id: 'enquiry_overview',
  initial: 'timeline',
  states: {
    timeline: {
      on: {
        CALENDAR_EXPANDING_CLICK: "calendar",
      }
    },
    calendar: {
      on: {
        SELECT_DATE: "timeline",
      }
    }
  }
}


export const enquiry_management = {
  id: 'enquiry_management',
  initial: 'overview',
  states: {
    overview: {
      on: {
        BOTTOM_TAB_SEARCH_CLICK: "search_enquiry",
        BOTTOM_TAB_ADD_CLICK: "add_enquiry",
        BOTTOM_TAB_FILTER_CLICK: "filter_enquiry",
        ENQUIRY_CARD_CLICK: "detail_enquiry",
      },
      ...enquiry_overview
    },
    search_enquiry: {
      on: {
        CANCEL_BUTTON_ENQUIRY_CLICK: "overview"
      }
    },
    add_enquiry: {
      on: {
        CANCEL: "overview",
        SUCCESS: "detail_enquiry"
      }
    },
    detail_enquiry: {
      on: {
        CLOSE: "overview"
      }
    },
    filter_enquiry: {
      on: {
        APPLY_FILTER_CLICK: "overview",
        CANCEL: "overview",
      }
    }
  },
};

export const systems = {
  id: 'sytems',
  initial: 'enquiry_management',
  states: {
    enquiry_management: {
      on: {
        HEADER_NOTIFICATION_ICON_CLICK: 'notification',
        SIDE_MENU_ACTIVITY_CLICK: 'activity_management',
      },
      ...enquiry_management
    },
    activity_management: {
      on: {
        HEADER_NOTIFICATION_ICON_CLICK: 'notification',
        SIDE_MENU_ENQUIRY_CLICK: 'enquiry_management',
      }
    },
    notification: {
      on: {
        SIDE_MENU_ACTIVITY_CLICK: 'activity_management',
        SIDE_MENU_ENQUIRY_CLICK: 'enquiry_management',
      }
    },
  }
};
