import "@app/styles/global.css";

import Nav from "@app/components/Nav";
import Provider from "@app/components/Provider";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Propmptopia',
  description: 'Discover and Share AI propmts',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
