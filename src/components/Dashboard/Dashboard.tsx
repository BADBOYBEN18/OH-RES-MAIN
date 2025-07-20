import React from 'react'
import { TopBar } from "./TopBar"
import { Grid } from './Grid'

export const Dashboard = () => {
    return (
        <div className='bg-white rounded-lg pb-4 shadow h-[200vh]'>
            <TopBar />
            <Grid />
        </div>
    )
}




// // src/components/Dashboard.tsx
// import React from 'react';
// import { TopBar } from './TopBar';
// import { UsageRadar } from './UsageRadar';

// export const Dashboard = () => {
//   return (
//     <div className="flex flex-col h-full overflow-y-auto">
//       <TopBar />
//       <div className="grid grid-cols-12 gap-4 px-4">
//         <div className="col-span-8">
//           {/* Add summary cards, charts here */}
//           <UsageRadar />
//           {/* Additional charts or recent activity */}
//         </div>
//         <div className="col-span-4">
//           {/* Additional widgets */}
//           <div className="rounded border border-stone-300 p-4">
//             <h3 className="font-semibold mb-2">Recent Activity</h3>
//             {/* Placeholder for recent logs or notifications */}
//             <p className="text-stone-500 text-sm">No new notifications.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
