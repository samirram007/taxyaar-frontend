import Home from '@/features/wizard-module/pages/home'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  beforeLoad: async ({ context }) => {
    if (!context.auth?.isAuthenticated) {

      // HeadCSS()
    }

  },
  component: RouteComponent,
})
function RouteComponent() {
  HeadCSS();
  return <Home />
}
export const HeadCSS = () => {

  const files = [
    "/css/bootstrap.min.css",
    "/css/font-awesome.min.css",
    "/css/custom.css",
  ];

  files.forEach((href) => {
    // Remove old one if exists
    document.querySelectorAll(`link[href="${href}"]`).forEach(el => el.remove());

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href + "?t=" + Date.now(); // cache bust
    document.head.appendChild(link);
  });


  return null;
};
