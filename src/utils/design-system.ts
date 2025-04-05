import { PrimeReactPTOptions } from "primereact/api";
import { classNames } from "primereact/utils";

interface Context {
  context: { index: number; focused: boolean; selected: boolean };
}

const designSystem: PrimeReactPTOptions = {
  inputtext: {
    root: {
      className:
        "py-1 text-slate-300 placeholder:text-slate-400 text-sm bg-thm border-slate-500 focus:border-blue focus:shadow-none",
    },
  },
  datatable: {
    wrapper: {
      className: "rounded-sm",
    },
    column: {
      root: { className: "text-slate-300 text-sm" },
      headerCell: {
        className: "py-5 bg-thm-900 py-4 border border-solid border-thm-700",
      },
      bodyCell: {
        className: "border border-solid border-thm-700 whitespace-nowrap",
      },
    },
    bodyRow: ({ context }: Context) => {
      const { index } = context;
      return {
        className: `${index % 2 === 0 ? "bg-thm-700" : "bg-thm-900"}`,
      };
    },
    footer: {
      className: "bg-thm border-none text-white font-medium py-6 pl-1",
    },
    rowExpansion: {
      className: "bg-red",
    },
  },
  dialog: {
    header: {
      className: "bg-thm-700 text-slate-100 px-5 py-2",
    },
    headerTitle: {
      className: "font-light",
    },
    closeButtonIcon: {
      className:
        "text-sm duration-300 ease-in transition-all text-slate-100 hover:text-green",
    },
    closeButton: {
      className: "shadow-none",
    },
    content: {
      className: "bg-thm-700 text-slate-300 px-5 py-2",
    },
  },
  dropdown: {
    root: {
      className:
        "bg-thm-900 border border-solid border-slate-600 text-slate-100 rounded-sm",
    },
    input: {
      className: "py-1 pl-3 text-sm text-slate-100 placeholder:text-slate-100",
    },
    trigger: {
      className: "text-sm text-slate-500 font-light",
    },
    wrapper: {
      className: "bg-thm-900 text-slate-100 rounded-sm",
    },
    list: { className: "py-3 list-none m-0 bg-thm-700" },
    item: ({ context }: Context) => {
      const { focused, selected } = context;
      return {
        className: classNames(
          "m-0 px-2 py-1 border-none rounded-none shadow-none outline-none",
          "transition-all duration-200 ease-in-out",
          "hover:text-black hover:bg-green/80",
          {
            "text-slate-100": !focused && !selected,
            "bg-thm-700 text-slate-300 ": focused && !selected,
            "bg-green text-black": focused && selected,
            "bg-green/10 text-green": !focused && selected,
          }
        ),
      };
    },
  },
  inputtextarea: {
    root: {
      className:
        "py-1 text-slate-300 placeholder:text-slate-400 text-sm bg-thm border-slate-500 focus:border-blue focus:shadow-none",
    },
  },
};

export default designSystem;
