import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto flex flex-col">
      {/* Status bar spacer */}
      <div className="h-12" />

      {/* Back button */}
      <div className="px-5 mb-6">
        <button onClick={() => navigate("/")} className="p-2 -ml-2">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Header */}
      <div className="px-8 mb-10">
        <h1 className="font-display text-2xl font-semibold tracking-wide text-foreground mb-2">
          {isLogin ? "Bentornato" : "Crea Account"}
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {isLogin
            ? "Accedi al tuo mondo di orologi esclusivi"
            : "Entra nella community Watches&Friends"}
        </p>
      </div>

      {/* Form */}
      <div className="px-8 flex-1">
        <div className="space-y-4">
          {!isLogin && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium mb-1.5 block">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Mario"
                  className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none border border-transparent focus:border-primary/40 transition-colors"
                />
              </div>
              <div>
                <label className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium mb-1.5 block">
                  Cognome
                </label>
                <input
                  type="text"
                  placeholder="Rossi"
                  className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none border border-transparent focus:border-primary/40 transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium mb-1.5 block">
              Email
            </label>
            <input
              type="email"
              placeholder="mario@example.com"
              className="w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none border border-transparent focus:border-primary/40 transition-colors"
            />
          </div>

          <div>
            <label className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium mb-1.5 block">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full bg-secondary rounded-lg px-4 py-3 pr-11 text-sm text-foreground placeholder:text-muted-foreground outline-none border border-transparent focus:border-primary/40 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Eye className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>

          {isLogin && (
            <div className="text-right">
              <button className="text-xs text-primary font-medium">
                Password dimenticata?
              </button>
            </div>
          )}

          {/* Submit */}
          <button className="w-full bg-primary text-primary-foreground rounded-lg py-3.5 text-sm font-semibold tracking-wide mt-2 active:scale-[0.98] transition-transform">
            {isLogin ? "Accedi" : "Registrati"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-2">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[11px] text-muted-foreground uppercase tracking-wider">oppure</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 bg-secondary rounded-lg py-3 border border-border hover:border-primary/30 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="hsl(var(--foreground))" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="hsl(var(--foreground))" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="hsl(var(--foreground))" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="hsl(var(--foreground))" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-xs font-medium text-foreground">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-secondary rounded-lg py-3 border border-border hover:border-primary/30 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="hsl(var(--foreground))">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span className="text-xs font-medium text-foreground">Apple</span>
            </button>
          </div>
        </div>

        {/* Toggle */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {isLogin ? "Non hai un account?" : "Hai già un account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-semibold"
            >
              {isLogin ? "Registrati" : "Accedi"}
            </button>
          </p>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="h-8" />
    </div>
  );
};

export default Auth;
