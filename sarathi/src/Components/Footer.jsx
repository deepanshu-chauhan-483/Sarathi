
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="container mx-auto px-4 py-8 md:py-12"> {/* Same container setup as navbar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">Logo</div>
          </div>
          
          <div>
            <div className="font-medium mb-2">Address:</div>
            <div className="text-sm text-muted-foreground">
              Level 1, 12 Sample St, Sydney NSW 2000
            </div>
          </div>
          
          <div>
            <div className="font-medium mb-2">Contact:</div>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">1800 123 4567</div>
              <div className="text-sm text-muted-foreground">doe@gmail.com</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link to="/cookie-settings" className="text-sm text-muted-foreground hover:text-foreground">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
