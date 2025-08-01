import { Header } from '@/components/header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ReferralCard } from '@/components/referral-card';
import { internData, rewards } from '@/data/mock';
import { Award, Shirt, FileText, IndianRupee } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Award,
  Shirt,
  FileText,
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-8 lg:p-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold font-headline mb-2">Welcome, {internData.name.split(' ')[0]}!</h1>
          <p className="text-muted-foreground mb-8">Here's your fundraising progress. Keep up the great work!</p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Donations Raised</CardTitle>
                <IndianRupee className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(internData.totalRaised)}
                </div>
                <p className="text-xs text-muted-foreground">Across all your referrals</p>
              </CardContent>
            </Card>
            <ReferralCard referralCode={internData.referralCode} />
          </div>

          <div>
            <h2 className="text-2xl font-bold font-headline mb-4">Rewards & Unlockables</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rewards.map((reward) => {
                const Icon = iconMap[reward.icon];
                return (
                  <Card key={reward.name} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent-foreground">
                          {Icon && <Icon className="h-6 w-6 text-accent" />}
                        </div>
                        <CardTitle>{reward.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm">{reward.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
