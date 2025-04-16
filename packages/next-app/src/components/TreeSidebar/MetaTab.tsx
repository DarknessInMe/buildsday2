import React, { memo } from 'react';

export const MetaTab = memo(() => {
	return (
		<form>
			<div className="mb-3">
				<label
					htmlFor="title"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					Build Name
				</label>
				<input
					id="title"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Enter build name"
					required
				/>
			</div>
			<div className="mb-3">
				<label
					htmlFor="description"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					Build Description
				</label>
				<textarea
					id="description"
					rows={5}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Enter build description"
				/>
			</div>
		</form>
	);
});

MetaTab.displayName = 'MetaTab';
