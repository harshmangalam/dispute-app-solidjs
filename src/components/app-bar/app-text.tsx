import { JSX, Show } from "solid-js";

interface Props {
  isActive?: boolean;
  text?: string;
  background: string;
  icon?: JSX.Element;
  notifications?: string;
}
export default function AppText(props: Props) {
  return (
    <li class="flex items-center gap-1.5 group">
      {/* app indicator bar  */}
      <div
        class="w-1 h-4  group-hover:bg-black/90 rounded-tr-xl rounded-br-xl"
        classList={{ "h-8 bg-black/90": props.isActive }}
      ></div>
      {/* app text  */}
      <a
        href="#"
        class="h-11 w-11 text-[15px] leading-[18px] font-semibold grid place-items-center text-white  rounded-full group-hover:rounded-xl relative"
        classList={{ "rounded-xl": props.isActive }}
        style={{
          background: props.background,
        }}
      >
        {props.text || props.icon}

        <Show when={props.notifications}>
          <div class="absolute bottom-0 right-0">
            <span class="rounded-xl border-2 text-white font-semibold border-[#EBEBEB] min-w-[20px] h-5 bg-[#EF5555] flex items-center justify-center text-[11px] leading-4">
              {props.notifications}
            </span>
          </div>
        </Show>
      </a>
    </li>
  );
}
